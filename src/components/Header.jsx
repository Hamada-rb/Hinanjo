import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar className="bg-primary">
                <Navbar.Brand href="" className="text-white">浜田市避難所アプリ</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;
