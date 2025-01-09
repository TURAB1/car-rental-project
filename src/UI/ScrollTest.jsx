import React,{useState} from 'react'
import { Container } from 'reactstrap'


function ScrollTest() {
	const [backgroundColor, setBackgroundColor] = useState("white");

	const handleScroll = (event) => {
		const { scrollTop, scrollHeight, clientHeight } = event.target;
		const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    console.log(scrollTop)
		if (scrollRatio > 0.5) {
			setBackgroundColor("lightblue");
		} else {
			setBackgroundColor("white");
		}
	};

	return (
		<div
			className="scrollable-section"
			style={{
				height: "300px",
				overflowY: "scroll",
				border: "1px solid #ccc",
				backgroundColor: backgroundColor,
				transition: "background-color 0.5s ease",
			}}
			onScroll={handleScroll}
		>
			<p style={{ paddingTop: "200px", textAlign: "center" }}>
				Scrollable Section
			</p>
			<p style={{ paddingTop: "500px", textAlign: "center" }}>
				Keep scrolling...
			</p>
			<p style={{ paddingTop: "800px", textAlign: "center" }}>
				Background Changes on Scroll
			</p>
		
		</div>
	);
}

export default ScrollTest;

// const ScrollTest = () => {
//   const [position, setPosition] = React.useState(0)
//   const handleScroll=(e)=>{
//    //const calculated=getPosition(e.target.scrollTop)
//    const {scrollTop}=e.target
//     setPosition(scrollTop)
//     console.log("scroll:"+scrollTop)
//   }
//   return (
//     <Container className='page-margin'  style={{height:800}} onScroll={handleScroll}>
//       <p >
//         {position}
//       </p>
//     </Container>
//   )
// }

// export default ScrollTest
