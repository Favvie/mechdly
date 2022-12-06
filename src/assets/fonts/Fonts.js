import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      
    @font-face {
    font-family: "Satoshi-Variable";
    src: url("/src/assets/fonts/satoshi/Satoshi-Variable.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Variable.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Variable.ttf") format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
    }

    /**
    * This is a variable font
    * You can controll variable axes as shown below:
    * font-variation-settings: 'wght' 900.0;
    *
    * available axes:

    * 'wght' (range from 300.0 to 900.0)

    */

    @font-face {
    font-family: "Satoshi-VariableItalic";
    src: url("/src/assets/fonts/satoshi/Satoshi-VariableItalic.woff2")
    format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-VariableItalic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-VariableItalic.ttf")
    format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: italic;
    }

    @font-face {
    font-family: "Satoshi-Light";
    src: url("/src/assets/fonts/satoshi/Satoshi-Light.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Light.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Light.ttf") format("truetype");
    font-weight: 300;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: "Satoshi-LightItalic";
    src: url("/src/assets/fonts/satoshi/Satoshi-LightItalic.woff2")
    format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-LightItalic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-display: swap;
    font-style: italic;
    }

    @font-face {
    font-family: "Satoshi-Regular";
    src: url("/src/assets/fonts/satoshi/Satoshi-Regular.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Regular.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Regular.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: "Satoshi-Italic";
    src: url("/src/assets/fonts/satoshi/Satoshi-Italic.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Italic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Italic.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: italic;
    }

    @font-face {
    font-family: "Satoshi-Medium";
    src: url("/src/assets/fonts/satoshi/Satoshi-Medium.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Medium.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: "Satoshi-MediumItalic";
    src: url("/src/assets/fonts/satoshi/Satoshi-MediumItalic.woff2")
    format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-MediumItalic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
    font-style: italic;
    }

    @font-face {
    font-family: "Satoshi-Bold";
    src: url("/src/assets/fonts/satoshi/Satoshi-Bold.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Bold.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: "Satoshi-BoldItalic";
    src: url("/src/assets/fonts/satoshi/Satoshi-BoldItalic.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-BoldItalic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-BoldItalic.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
    font-style: italic;
    }

    @font-face {
    font-family: "Satoshi-Black";
    src: url("/src/assets/fonts/satoshi/Satoshi-Black.woff2") format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-Black.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-Black.ttf") format("truetype");
    font-weight: 900;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: "Satoshi-BlackItalic";
    src: url("/src/assets/fonts/satoshi/Satoshi-BlackItalic.woff2")
    format("woff2"),
    url("/src/assets/fonts/satoshi/Satoshi-BlackItalic.woff") format("woff"),
    url("/src/assets/fonts/satoshi/Satoshi-BlackItalic.ttf") format("truetype");
    font-weight: 900;
    font-display: swap;
    font-style: italic;
    }

      `}
	/>
);

export default Fonts;
