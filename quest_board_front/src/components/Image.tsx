import ImagePropsInterface from '../types/components/image.interface';

export const Image = (props: ImagePropsInterface): JSX.Element => {


    return(
        <img src={props.src} className="img-fluid" />
    )
}