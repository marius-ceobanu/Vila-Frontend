import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import Button from "../Layout/CustomButton";
import Card from "../Layout/Card.js";
import CardBody from "../Layout/CardBody.js";
import CardFooter from "../Layout/CardFooter.js";

import styles from "../../jss/teamStyle";

const useStyles = makeStyles(styles);
const team1Url = process.env.REACT_APP_AWS_S3_API + "aboutUs/team/cristi.jpg";
const team2Url = process.env.REACT_APP_AWS_S3_API + "aboutUs/team/maria.jpg";
const team3Url = process.env.REACT_APP_AWS_S3_API + "aboutUs/team/marc.jpg";

function TeamSection() {
  const team = [{img: team1Url, name: "Cristi", role: "CEO"}, {img: team2Url, name: "Maria", role: "Co-founder"}, {img: team3Url, name: "Marc", role: "Bucatar"}];
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Echipa Noastra</h2>
      <div>
        <GridContainer>
          {team.map((member, i) =>(
              <GridItem xs={12} sm={12} md={4} key={i}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={member.img} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.role}</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      You can write here details about one of your team members. You
                      can give more details about what they do. Feel free to add
                      some <a href="#pablo">links</a> for people to be able to
                      follow them outside the site.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-instagram"} />
                    </Button>
                    <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

export default TeamSection;
