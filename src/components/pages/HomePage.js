import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import MyNavBar from '../myNavBar/myNavBar'
import Footer from '../Footer/Footer'

class HomePage extends Component {
    render() {
        return (
            <>
            <MyNavBar/>
                <ImageCarousel/>
                <Footer/>

            </>
        )
    }
}

export default HomePage