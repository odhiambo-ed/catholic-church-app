/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ai_subscribe_rest = {
    attach: function (context, settings) {
      $('.subscribe-rest',context).each(function() {
        var form = $(this)[0],
        subm = $(this).find('.form-submit')[0],
        pattern = {
          'false':false,
          'true': true,
          'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }, gr = [],
        $elms = $(this).find('input','textarea').not('[group]'),
        $gelms = $(this).find('input','textarea').filter('[group]');

        subm.onclick = function () {
          var err = false, str='', $redirect, $message, email='', fok = function() {}, ferr = function() {};
          if ( $(this).data('ai_subscribe') && $.isFunction($(this).data('ai_subscribe').fok) ) {
            fok = $(this).data('ai_subscribe').fok;
          };
          if ( $(this).data('ai_subscribe') && $.isFunction($(this).data('ai_subscribe').ferr) ) {
            ferr = $(this).data('ai_subscribe').ferr;
          };

          function approve(elm, vote) {
            var val = (elm.type == 'checkbox'?elm.checked:elm.value);
            val = val === ""?'""':(typeof(val)=='string'?'"'+val+'"':val);
            if (vote) {
              $(elm).removeClass('error');
            } else {
              $(elm).addClass('error');
              err = true;
            }
            return '"'+elm.name+'":' + val;
          }
          function check(elm) {
            var fl = false,  val = (elm.type == 'checkbox'?elm.checked:elm.value);
            if (elm.name == 'redirect') $redirect = $(elm);
            if (elm.name == 'message') $message = $(elm);
            if (!elm.hidden) {
              if (!elm.required) {
                fl = true;
              } else if ($(elm).attr('data-pattern') && typeof pattern[$(elm).data('pattern')] != "undefined") {
                if (elm.type == 'checkbox') {
                  if ( pattern[$(elm).attr('data-pattern')] === val ) fl = true;
                } else if (pattern[$(elm).attr('data-pattern')].test(val.toLowerCase())) {
                  fl = true;
                  if (elm.name == 'email') email = val;
                }
              } else if ( val != "") fl = true;
            } else fl = true;
            return fl;
          }

          //Validate data values for JSON array
          $elms.each(function() {
            let fl  = false;
            fl = check(this);
            str = str + approve(this, fl)+',';
          });
          $gelms.each(function() {
            var gn = $(this).attr('group');
            if ( gr.indexOf( gn ) == -1 ) gr.push(gn);
          });
          for (var i1 = 0; i1 < gr.length; i1++) {
            var name = gr[i1], fl = true, gstr = '',
            $gr = $gelms.filter('[group="'+name+'"]'), $grw = $gr.closest('.group');
            $gr.each(function(i) {
              if (this.type == 'checkbox' || this.type == 'radio') {
                var fl1 = this.checked;
                if (fl1) {
                  gstr = gstr==''?'"'+name+'":["'+this.value+'"':gstr+',"'+this.value+'"';
                };
                fl = fl1 ? false : fl;
                if (i == $gr.length-1 ) {
                  if (!fl) {
                    str = str + gstr + '],';
                    if ($grw) $grw.removeClass('error-group');
                  } else {
                    err = true;
                    if ($grw) $grw.addClass('error-group');
                  };
                };
              };
            });

          };

          //We need to get CSRT token first
          function getAccessToken() {
                return axios.get('/session/token')
                .then(function (response) {
                  return response.data;
                })
          }

          //Prepare Json data array to send to the API
          var data = '{'+str.slice(0,-1)+'}';

           //Call POST inside the CSRF token request function
          if( !err  ){
            getAccessToken().then(result => {
               let axiosConfig = {
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'X-CSRF-Token': result
                      }
                };
                //console.log(JSON.parse(data));
                axios.post(!form.action?'api/subscribe':form.action, JSON.parse(data), axiosConfig)
                  .then(function (res) {
                    if( $redirect && $redirect[0].value && res.data == "subscribed") {
                      window.location.href = $redirect[0].value+"?email="+email;
                    };
                    if( !$redirect && $message && $message[0].value && res.data == "subscribed") {
                      Swal.fire($message[0].value);
                    };
                  })
                  .catch(function (err) {
                    // output.className = 'output-container';
                    // output.innerHTML = err.message;
                    console.log(err.response);
                  });
            })
            .catch(error => console.log(error));
            if ($.isFunction(fok)) {
              fok.call(this);
            };
          } else {
            if ($.isFunction(ferr)) {
              ferr.call(this);
            };
          };
        };
      });

    }
  };

})(jQuery, Drupal);
