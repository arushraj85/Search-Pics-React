import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0 };
        this.imageRef=React.createRef();

    }

    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);// this will give the image heigh as 0. reason : we are asking for heigh of image in-fact before loading it that is why it is giving up as 0. so asking for image in componentDidMount() can be too early.

        //solution for this:
        this.imageRef.current.addEventListener('load',this.setSpans);//this will make sure the image is downloaded and displayed on the dom then we console log the image height in set spans

      }// it will mount when component get rendered

      setSpans=()=>{
        const height= this.imageRef.current.clientHeight;
        const spans= Math.ceil(height/10);//10 it the rows needed for image
        this.setState({spans});
      }
    render(){
        const{description,urls}=this.props.image;
        return(
                <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <img ref={this.imageRef} alt={description} src={urls.regular}/>
                </div>
        );
    }
}

export default ImageCard;