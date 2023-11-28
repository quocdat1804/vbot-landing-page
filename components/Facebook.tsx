import Script from 'next/script'

function Facebook() {
    return (
        <div>
            <div id="fb-root"></div>

            <div id="fb-customer-chat" className="fb-customerchat"></div>
            <Script strategy="lazyOnload" id="facebook">
                {`
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "2571531373130915");
              chatbox.setAttribute("attribution", "biz_inbox");
              chatbox.setAttribute("theme_color", "#14B45C");
              chatbox.setAttribute("logged_in_greeting", "@Vbot.Web.Resource.logged_greeting");
              chatbox.setAttribute("logged_out_greeting", "@Vbot.Web.Resource.logged_greeting");
        
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v12.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
          `}
            </Script>
        </div>
    );
}

export default Facebook;