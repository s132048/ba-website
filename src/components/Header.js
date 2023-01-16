import {Button, ButtonGroup, Container, Grid} from "@mui/material";

import {isMobile} from "react-device-detect";

const Header = () => {
    return (<Container>
        {
            isMobile && <Grid></Grid>
        }
        {
            !isMobile && <Grid>
                <Button variant='contained'>
                    BA
                </Button>
                <ButtonGroup variant='contained'>
                    <Button>
                        Category
                    </Button>
                    <Button>
                        Type
                    </Button>
                    <Button>
                        About us
                    </Button>
                    <Button>
                        Contact
                    </Button>
                </ButtonGroup>
            </Grid>
        }
    </Container>);
}

export default Header;
