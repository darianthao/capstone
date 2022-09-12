import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from '../myNavBar/myNavBar'
import Footer from '../Footer/Footer'
import PSCameraLists from "../ItemLists/PSCameraLists";
import {Row} from "react-bootstrap";
import PSCameraPageInformation from "../PageInformation/PSCameraPageInformation";

class PSPage extends Component {
    render() {
        return (
            <>
                <>
                    <MyNavBar/>
                    <Row>
                        <h1>Point And Shoot Camera Page!</h1>
                    </Row>
                    <Row>
                        <PSCameraPageInformation/>
                    </Row>
                    <Row>
                        <PSCameraLists/>
                    </Row>
                    <Footer/>
                </>
            </>
        )
    }
}

export default PSPage