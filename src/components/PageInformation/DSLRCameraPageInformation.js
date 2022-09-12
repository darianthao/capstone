import {Component} from "react";
import {Accordion} from "react-bootstrap";

class DSLRCameraPageInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {
                regularPrice: "",
                name: ""
            }
        }
    }

    render() {
        return (
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What Are DSLR Camera's?</Accordion.Header>
                    <Accordion.Body>
                        So, what are DSLR cameras? DSLR camera is short for digital single-lens reflex camera. This style of camera is different than compact cameras or the camera in your smartphone in several ways. For one thing, the larger light sensor in a DSLR lets in more light to provide a clearer, more detailed image, giving you as the photographer more control, and greater creative flexibility — even in low light situations when the larger sensor helps minimize distortion. Additionally, with a DSLR camera, the light you’re seeing through the viewfinder is the same light that will hit the camera’s sensor when you click, not an estimate as with other cameras. What you see is what you get. Other attributes of many DSLR cameras include quick focus and a rapid shooting speed — burst mode — that lets you snare multiple shots per second, which is a good way to get the "perfect" shot. Keep in mind that since most digital SLR cameras don’t come with built-in storage, you’ll need a memory card, probably either an SD (secure digital) card or a CF (compact flash) card, so you can save the shots you want to keep, at the image file size you prefer. A good way to quickly and efficiently get your photos uploaded from the memory card to your computer is with a memory card reader. The memory card also lets you upload your photos to a digital picture frame when you want to display them front and center, either for yourself in your den or entertainment room, or as a gift for a friend or loved one. Additionally, DSLR cameras accept a wide array of DSLR lenses. This is probably the biggest advantage a DSLR camera has over other camera styles because it’s impossible to create one lens that will do everything a photographer may want — from changing depth of field, to emphasizing foreground or background, to getting a wide-angle or fish-eye view, to zooming in super close to see a squirrel’s whiskers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How To Find The Best DSLR Camera For Beginners</Accordion.Header>
                    <Accordion.Body>
                        The first thing to remember when you’re researching the best DSLR camera for beginners is that cameras are not one size fits all. It’s important to start your search armed with an idea of the types of photos you want to take. If you want to specialize in portraits, you’ll need different features than if you intend to take sports photos, capturing action that happens in a split-second. Consider too whether you’ll benefit from features like autofocus, in-lens image stabilization, self-timer, touch screen or built-in Wi-Fi, which will allow you to share your photos to your smartphone or tablet instantly. Also consider brand, not because one brand is necessarily better than another, but rather because every brand may not offer the lenses and accessories you want. For instance, you’ll likely need a telephoto lens if you’re going to specialize in wildlife photography. If that’s the case, you’ll want to choose a brand that offers one. To assist your search for the best DSLR for beginners, you may want to spend some time browsing the list of top-rated DSLR cameras to help you identify the features that are really important to you.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Geting The Most Out Of Your DSLR Camera</Accordion.Header>
                    <Accordion.Body>
                        Sometimes the difference between capturing that perfect memory and fumbling the shot comes down to your accessories. Adding an extra battery or two will keep you shooting, even when you don't have time to recharge. Setting up a compatible tripod helps to ensure crisp, clear photos. Plus, the right accessories do more than just help you take better photos. If you’ll be sharing your photos in person, rather than just digitally, you may want to consider which of the photo printers will work best for you. You may also want to protect your investment with a gear bag or case that can safely hold all your equipment. Any experienced photographer will tell you it's a good idea to have an extra lens cap on hand in case one gets damaged or lost, plus a cleaning kit can help ensure better photos while protecting against dust and other contaminants.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export default DSLRCameraPageInformation