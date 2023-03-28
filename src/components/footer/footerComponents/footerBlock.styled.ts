import styled from 'styled-components';

export const FooterBlockStl = styled.div`
	display: flex;
	flex-direction: column;
	.footer {
		&__text {
			margin-top: 15px;
			margin-bottom: 45px;
			font-weight: 400;
			font-size: 16px;
		}
		&__subscribe {
			margin-bottom: 14px;
			font-weight: 400;
			font-size: 12px;
		}
		&__title {
			margin-bottom: 25px;
			font-weight: 600;
			font-size: 20px;
		}
		&__link {
			font-weight: 400;
			font-size: 14px;
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}
		&__connection {
			margin: 20px 0 15px; 
			font-weight: 400;
			font-size: 14px;
		}
		&__social {
			display: flex;
			gap: 10px;
		}
		&__phone,
		&__mail {
			display: flex;
			flex-direction: column;
			gap: 5px;
			margin-bottom: 25px;
			span {
				font-weight: 300;
				font-size: 12px;
			}
			span:first-child {
				font-weight: 600;
				font-size: 14px;
			}
			span:nth-child(3) {
				text-decoration: underline;
			}
		}
		&__cards {
			display: flex;
		}
	}

	@media (max-width: 668px) {
		&:first-child {
			grid-column: 1 / 3;
		}
	}
	@media (max-width: 450px) {	
		&:last-child {
			grid-column: 1 / 2;
			grid-row: 3 / 4;
		}
		&:first-child {
			position: relative;
			svg {
				max-width: 100px;
			}
		}

		&:nth-last-child(2) {
			grid-column: 2 / 3;
			h2, button {
				display: none;
			}
		}
		.footer {
			&__link {
				font-size: 12px;
			}
			&__button {
				position: absolute;
				top: 16px;
				right: 0;
			}
			&__text {
				margin: 0;
				font-size: 12px;
			}
		}
	}
`;

