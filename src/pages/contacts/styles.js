import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({


  contact: {
    backgroundColor: "#f5f5f5",
    maxWidth: 1920,
  },
  contact__content: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'space-between',
    alignItems: "center",
    maxWidth: 1258,
    margin: "auto",

    "& h1": {
      color: "#0864B1",
      fontSize: 50,
    },
    "& label": {
      color: "#0864B1",
      fontSize: 30,
      fontWeight: "bold",
     
    },
   
  },
  
 
 
}));

export default useStyles;
