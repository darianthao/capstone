import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from '../myNavBar/myNavBar'
import Footer from '../Footer/Footer'
import DSLRCameraLists from "../ItemLists/DSLRCameraLists";
import {Row} from "react-bootstrap";
import DSLRCameraPageInformation from "../PageInformation/DSLRCameraPageInformation";

class DSLRPage extends Component {
    render() {
        return (
            <>
                <MyNavBar/>
                <Row>
                    <h1>DSLR Camera Page!</h1>
                </Row>
                <Row>
                    <DSLRCameraPageInformation/>
                </Row>
                <Row>
                    <DSLRCameraLists/>
                </Row>
                <Footer/>
            </>
        )
    }
}

export default DSLRPage