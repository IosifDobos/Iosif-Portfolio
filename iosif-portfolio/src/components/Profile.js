// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// // @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";

// // import Footer from "components/Footer/Footer.js";
// import Button from '../layout-components/CustomButtons/Button'
// import GridContainer from '../layout-components/Grid/GridContainer';
// import GridItem from "../layout-components/Grid/GridItem";
// import NavPills from "../layout-components/NavPills/NavPills";
// import Parallax from "../layout-components/Paralax/Parallax";

// import profile from "./assets/img/github_image.png";

// import studio1 from './assets/img/examples/pic10.jpg'
// import studio2 from "./assets/img/examples/pic1.jpg";
// import studio3 from "./assets/img/examples/pic2.jpg";
// import studio4 from "./assets/img/examples/pic8.jpg";
// import studio5 from "./assets/img/examples/pic9.jpg";
// import work1 from "./assets/img/examples/pic8.jpg";
// import work2 from "./assets/img/examples/pic7.jpg";
// import work3 from "./assets/img/examples/pic6.jpg";
// import work4 from "./assets/img/examples/pic5.jpg";
// import work5 from "./assets/img/examples/pic4.jpg";

// import styles from "./assets/jss/material-kit-react/views/profilePage.js";

// const useStyles = makeStyles(styles);

// export default function Profile(props) {
//   const classes = useStyles();
//   const imageClasses = classNames(
//     classes.imgRaised,
//     classes.imgRoundedCircle,
//     classes.imgFluid
//   );
//   const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
//   return (
//     <div>
//       <Parallax small filter image={require("./assets/img/cover_photo.jpg")} />
//       <div className={classNames(classes.main, classes.mainRaised)}>
//         <div>
//           <div className={classes.container}>
//             <GridContainer justify="center">
//               <GridItem xs={12} sm={12} md={6}>
//                 <div className={classes.profile}>
//                   <div>
//                     <img src={profile} alt="profile" className={imageClasses} />
//                   </div>
//                   <div className={classes.name}>
//                     <h3 className={classes.title}>Iosif B. Dobos</h3>
//                     <h6>SOFTWARE DEVELOPER</h6>
//                     <Button justIcon link className={classes.margin5}>
//                       <a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" rel="noopener noreferrer">
//                           <i className={"fab fa-linkedin"} />
//                         </a>
//                     </Button>
//                     <Button justIcon link className={classes.margin5}>
//                       <a href="https://github.com/IosifDobos" target="_blank" rel="noopener noreferrer">
//                         <i className={"fab fa-github"} />
//                       </a>
//                     </Button>
//                     <Button justIcon link className={classes.margin5}>
//                       <a href="https://gitlab.com/IosifDobos" target="_blank" rel="noopener noreferrer">
//                         <i className={"fab fa-gitlab"} />
//                       </a>
//                     </Button>
//                     <Button justIcon link className={classes.margin5}>
//                       <a href="https://medium.com/@josephberellyy22" target="_blank" rel="noopener noreferrer">
//                         <i className={"fab fa-medium"} />
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </GridItem>
//             </GridContainer>
//             <div className={classes.description}>
//                 <p>
//                     I am a 4th year Computer Science student at Technology University Dublin with ICT as my major.
//                     I love exploring new technologies and often amazed by the progress we as a human species have 
//                     made so far in the recent years.{" "}
//                 </p>
//                 <p>
//                     This website is developed as part of one of the final year module assignment.
//                 </p>
//             </div>
//             <GridContainer justify="center">
//               <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
//                 <NavPills
//                   alignCenter
//                   color="primary"
//                   tabs={[
//                     {
//                       tabButton: "Skills",
//                       tabIcon: Camera,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={studio1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio2}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={studio5}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio4}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     },
//                     {
//                       tabButton: "Projects",
//                       tabIcon: Palette,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work2}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work3}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work4}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work5}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     },
//                     {
//                       tabButton: "Favorite",
//                       tabIcon: Favorite,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work4}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio3}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work2}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio1}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     }
//                   ]}
//                 />
//               </GridItem>
//             </GridContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }