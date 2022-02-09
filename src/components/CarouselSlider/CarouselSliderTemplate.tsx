import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { Paper, Typography } from '@material-ui/core';

import { CarouselSliderProps } from '.';
import { useCarouselStyles } from './styles';
const CarouselSliderTemplate = ({
	carouselContent,
	showSlideLabels,
	indicatorButtonStyle,
	animationStyle,
	useHTML5VideoPlayerForSlides,
	useVideoEmbedForSlides,
	carouseIndicatorIconButtonProps,
	carouselImagesReadyToDisplay,
}: CarouselSliderProps): JSX.Element => {
	const classes = useCarouselStyles();
	const usingVideoPlayer =
		useHTML5VideoPlayerForSlides || useVideoEmbedForSlides;
	/**
	 * If the carousel is using video content, disable the slide labels
	 * Currently, this disables the ability to pass a prop to turn off the
	 * labels.  Need to find a better solution for this
	 */

	showSlideLabels = !usingVideoPlayer;
	const navButtonProps = usingVideoPlayer ? { style: { display: 'none' } } : {};

	return (
		<Carousel
			indicatorContainerProps={{
				...indicatorButtonStyle,
			}}
			className={classes.mainCarouselWrap}
			swipe={true}
			animation={animationStyle}
			autoPlay={!usingVideoPlayer}
			navButtonsProps={{ ...navButtonProps }}
			//TODO need to figure out the best way to style the indicators
			// indicatorIconButtonProps={{ ...carouseIndicatorIconButtonProps }}
		>
			{carouselContent?.map(
				(
					{
						imgPath,
						label,
						labelSuffix,
						videoEmbed,
						html5Video,
						thumbNailImage,
					},
					idx
				) => (
					<div
						key={`carousel_item_${idx}`}
						className={classes.mainContentContainer}
					>
						<Paper>
							{showSlideLabels && (
								<div className={classes.slideLabelStyleBlack50Percent}>
									<Typography>
										<span className={classes.prefixText}>{label}</span>{' '}
										<span>{labelSuffix}</span>
									</Typography>
								</div>
							)}
							{!usingVideoPlayer && carouselImagesReadyToDisplay && (
								<img
									src={imgPath}
									alt={label}
									className={classes.mainContentImage}
								/>
							)}
							{useVideoEmbedForSlides && videoEmbed && (
								<object className={classes.videoEmbed} data={videoEmbed}>
									video {videoEmbed}
								</object>
							)}
							{useHTML5VideoPlayerForSlides && html5Video && (
								// eslint-disable-next-line jsx-a11y/media-has-caption
								<video
									className={classes.html5Video}
									controls
									poster={thumbNailImage}
								>
									<source src={html5Video} type="video/mp4"></source>
								</video>
							)}
						</Paper>
					</div>
				)
			)}
		</Carousel>
	);
};

export default CarouselSliderTemplate;
