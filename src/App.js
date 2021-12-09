import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { DivColumn } from "./components/elementaries/Containers";
import DesktopPlaceholder from "./components/pages/DesktopPlaceholder";
import Router from "./services/Router";
import Theme from "./themes";

let AppContainer = styled(DivColumn)`
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    overflow: hidden;
`;

export default function App() {
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <Theme>
            {isMobile
                ? <AppContainer>
                      <Router/>
                  </AppContainer>
                : <DesktopPlaceholder/>
            }
        </Theme>
    );
}
