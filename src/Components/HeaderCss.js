import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  container: {
    width: 1614,
    height: 64,
    backgroundColor: "#212731",
  },

  SearchBarCss: {
    border: "1px solid #E1E4E6",
    width: 258,
    backgroundColor: "#fff",
    height: 37,
    borderRadius: 8,
  },
  categories: {
    color: "#D1D6DA",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 14,
  },

  categoryCss: {
    position: "absolute",
    top: 23,
    left: 817,
    width: 73,
  },
  websiteBuilderCss: {
    position: "absolute",
    width: 142,
    top: 23,
    left: 943,
  },
  dealCss: {
    position: "absolute",
    width: 91,
    top: 23,
    left: 1138,
  },
});

export {useStyles};
