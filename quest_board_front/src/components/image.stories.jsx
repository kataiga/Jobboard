import "../style/bootstrap/bootstrap.min.css";
import {Image} from "./Image";

export default {
    title: 'Basic components/Image',
    component: Image,
    argTypes: {
        src: {
            name: "dir",
            type: {name: "string", required: true},
            defaultValue: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=Angry&mouthType=Tongue&skinColor=Light",
            description: "image field"
        }
    }
}


export const Default = (props) => {

    return <img src={props.src} className="img-fluid" />
}