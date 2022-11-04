export default function Helmet(props) {
    document.title = props.title + " • " + props.constTitle;
  
    return <div>{props.children}</div>;
  };