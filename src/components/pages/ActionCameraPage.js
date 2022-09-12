import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from '../myNavBar/myNavBar'
import Footer from '../Footer/Footer'
import ActionCameraPageInformation from "../PageInformation/ActionCameraPageInformation";
import ActionCameraLists from "../ItemLists/ActionCameraLists";
import {Row, Col} from "react-bootstrap"

class ActionCameraPage extends Component {
    render() {
        return (
            <>
                <MyNavBar/>
                <Row >
                <h1>Action Camera Page!</h1>
                </Row>
                <Row>
                <ActionCameraPageInformation/>
                    </Row>
                <Row>
                    <ActionCameraLists/>
                </Row>
                <Footer/>
            </>
        )
    }
}

export default ActionCameraPage