import {Outlet, Route, Routes} from 'react-router-dom';

import {Button, ButtonGroup, Container, Grid} from "@mui/material";

import Main from './pages/Main';

import './App.css';
import {isMobile} from "react-device-detect";

const Layout = () => {
    <div>
        <Header/>
        <Outlet/>
    </div>
};

const Header = () => {
    return (<Container>
        {
            isMobile && <Grid>
                <Button variant='contained' color='secondary'>
                    BA
                </Button>
                <Button variant='contained'>
                    Welcome! We are Behind Archive.
                </Button>
            </Grid>
        }
        {
            !isMobile && <Grid>

                <Button variant='contained' color='secondary'>
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
};

function App() {
    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
