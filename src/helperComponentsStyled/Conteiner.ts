import styled from "styled-components";

type ContainerStlType = {
	maxWidth?: string
	width?: string
	margin?: string
	padding?: string
	justContent?: string
	flexWrap?: string
	align?: string
	columns?: boolean
	grid?: boolean
	wrap?: boolean
	gap?: string
}

const ContainerStl = styled.div<ContainerStlType>`
	max-width: ${(props) => props.maxWidth || "1367px"};
	width: ${props => props.width || '100%'};
	margin: ${(props) => props.margin || "0 auto"};
	padding: ${props => props.padding || '0 15px'};
	justify-content: ${(props) => props.justContent || 'space-between'};
	align-items: ${(props) => props.align || 'center'};
	display: ${props => props.grid ? 'grid' : 'flex'};
	flex-wrap: ${(props) => props.wrap ? 'wrap' : 'no-wrap'};
	flex-direction: ${(props) => props.columns ? 'column' : 'row'};
	gap: ${(props) => props.gap || null};
`;


export default ContainerStl;