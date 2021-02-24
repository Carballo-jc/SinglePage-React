import { Container, Grid } from "@material-ui/core";
import React from "react";
import CardDetail from "../../components/CardDetail";
import useStyles from "./styles";
import benjamin from "../../assets/benjamin-child-GWe0dlVD9e0-unsplash.png";
import jurica from "../../assets/jurica-koletic-MLLBlDL5bDw-unsplash.png";
import product from "../../assets/product-school-cd7i9vYIyeY-unsplash.png";

const cardDetails = [
  {
    id: 1,
    image: benjamin,
    description:
      "Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur saLorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sa Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    id: 2,
    image: jurica,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    id: 3,
    image: product,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

const Articles = () => {
  const classes = useStyles();
  return (
    <section className={classes.article}>
       <Container>
           <div className={classes.article__content}>
            <h1 className={classes.article__titles}>Latest News</h1>

            <Grid container spacing={2} justify="center" alignItems="center">
              {cardDetails.map((detail) => (
                <CardDetail detail={detail} key={detail.id} />
              ))}
            </Grid>
          </div>
       </Container>
    </section>
  );
};

export default Articles;
