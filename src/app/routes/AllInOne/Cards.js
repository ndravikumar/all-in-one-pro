import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import { AllInOne } from './data';
import { history } from 'store';

const Cards = () => {
  return (
    <div  style={{display:"flex",flexWrap:"wrap"}}>
    {AllInOne ? AllInOne.map((item)=>{
    return(
    <Card onClick={()=>history.push("/app/AllInOne/html")} className="shadow border-0 mr-3" style={{width:290, height:410}}>
      <CardImg top width="100%" height="168px" src={item.image} alt="Card image cap"/>
      <CardBody>
        <h3 className="card-title">{item.title}</h3>
        <CardSubtitle>{item.subTitle}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Button variant="contained" className="bg-primary text-white">{item.btnText}</Button>
      </CardBody>
    </Card>
    )}) : null}
    </div>
  );
};
export default Cards;