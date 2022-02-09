import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const CarouselIndicatorsTop = {
	style: {
		position: 'absolute',
		top: '2rem',
	},
};
export const CarouselIndicatorsBottom = {
	style: {
		position: 'absolute',
		bottom: '2rem',
	},
};
export const CarouselIndicatorsLeft = {
	style: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		top: 0,
		left: '5rem',
		bottom: 0,
	},
};
export const CarouselIndicatorsRight = {
	style: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		top: 0,
		bottom: 0,
		right: '5rem',
	},
};

export const CarouselIndicatorsBottomRight = {
	style: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		bottom: '16%',
		right: '5rem',
	},
};

export const CarouselIndicatorIconButtonProps = {
	style: {
		color: '#0093CB',
	},
};

export const useCarouselStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainCarouselWrap: {
			position: 'relative',
			aspectRatio: '16/9',
		},
		mainContentContainer: {
			overflow: 'hidden',
			aspectRatio: '16/9',
		},
		mainContentImage: {
			width: '100%',
			display: 'block',
			aspectRatio: '16/9',
		},
		slideLabelStyleBlack50Percent: {
			[theme.breakpoints.down('sm')]: {
				right: 0,
				left: '10px',
				background: 'none',
				width: '50%',
			},
			position: 'absolute',
			background: 'rgb(0, 0, 0, 0.5)',
			color: 'rgb(255, 255, 255)',
			display: 'inline-block',
			padding: 8,
			borderRadius: 5,
			right: '5rem',
			bottom: '20%',
		},
		prefixText: {
			color: '#55D0FF',
		},
		videoEmbed: {
			aspectRatio: '16/9',
			width: '100%',
		},
		html5Video: {
			aspectRatio: '16/9',
			width: '100%',
		},
	})
);
