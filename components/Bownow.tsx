import Script from 'next/script'

function Bownow() {
    return (

        <Script strategy="lazyOnload" id="_bownow_ts">
            {`
              var _bownow_ts = document.createElement('script');
              _bownow_ts.charset = 'utf-8';
              _bownow_ts.src = 'https://contents.bownow.jp/js/UTC_ead7f13cba1b4c66056b/trace.js';
              document.getElementsByTagName('head')[0].appendChild(_bownow_ts);
          `}
        </Script>

    );
}

export default Bownow;