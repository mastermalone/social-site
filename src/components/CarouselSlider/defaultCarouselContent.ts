export interface SliderImageInterface {
	label: string;
	labelSuffix?: string;
	imgPath: string;
	videoEmbed?: string;
	html5Video?: string;
	thumbNailImage?: string;
}

export const DefaultCarouselContent: SliderImageInterface[] = [
	{
		label: 'San Francisco – Oakland Bay Bridge, United States /',
		labelSuffix: 'City By the Bay',
		imgPath:
			'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1200&h=600&q=60',
		videoEmbed: 'https://www.youtube.com/embed/kHwF2mdHUwo',
		html5Video:
			'https://tng-lwb-static.s3.amazonaws.com/app/videos/homepage-video-web-optimized.mp4',
	},
	{
		label: 'Bird /',
		labelSuffix: 'Sparrow',
		imgPath:
			'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1200&h=600&q=60',
		videoEmbed: 'https://www.youtube.com/embed/kHwF2mdHUwo',
		html5Video:
			'https://tng-lwb-static.s3.amazonaws.com/app/videos/homepage-video-web-optimized.mp4',
	},
	{
		label: 'Bali, Indonesia /',
		labelSuffix: 'The Wonderful Country',
		imgPath:
			'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=600&q=80',
		videoEmbed: 'https://www.youtube.com/embed/kHwF2mdHUwo',
		html5Video:
			'https://tng-lwb-static.s3.amazonaws.com/app/videos/homepage-video-web-optimized.mp4',
	},
	{
		label: 'Goč, Serbia /',
		labelSuffix: 'Some text here',
		imgPath:
			'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1200&h=600&q=60',
		videoEmbed: 'https://www.youtube.com/embed/kHwF2mdHUwo',
		html5Video:
			'https://tng-lwb-static.s3.amazonaws.com/app/videos/homepage-video-web-optimized.mp4',
	},
];
