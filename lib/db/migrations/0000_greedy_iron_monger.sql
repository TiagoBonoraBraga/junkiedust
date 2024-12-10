CREATE TABLE `playlist_songs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playlist_id` int NOT NULL,
	`song_id` int NOT NULL,
	`order` int NOT NULL,
	CONSTRAINT `playlist_songs_id` PRIMARY KEY(`id`),
	CONSTRAINT `unq_playlist_song` UNIQUE(`playlist_id`,`song_id`)
);
--> statement-breakpoint
CREATE TABLE `playlists` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`cover_url` varchar(255),
	`created_at` datetime NOT NULL DEFAULT now(),
	`updated_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `playlists_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `songs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`artist` varchar(255) NOT NULL,
	`album` varchar(255),
	`duration` int NOT NULL,
	`genre` varchar(255),
	`bpm` int,
	`key` varchar(255),
	`image_url` varchar(255),
	`audio_url` varchar(255) NOT NULL,
	`is_local` boolean NOT NULL DEFAULT true,
	`created_at` datetime NOT NULL DEFAULT now(),
	`updated_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `songs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `playlist_songs` ADD CONSTRAINT `playlist_songs_playlist_id_playlists_id_fk` FOREIGN KEY (`playlist_id`) REFERENCES `playlists`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playlist_songs` ADD CONSTRAINT `playlist_songs_song_id_songs_id_fk` FOREIGN KEY (`song_id`) REFERENCES `songs`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `idx_playlist_songs_playlist_id` ON `playlist_songs` (`playlist_id`);--> statement-breakpoint
CREATE INDEX `idx_playlist_songs_song_id` ON `playlist_songs` (`song_id`);--> statement-breakpoint
CREATE INDEX `idx_playlist_songs_order` ON `playlist_songs` (`order`);--> statement-breakpoint
CREATE INDEX `idx_playlists_name` ON `playlists` (`name`);--> statement-breakpoint
CREATE INDEX `idx_playlists_created_at` ON `playlists` (`created_at`);--> statement-breakpoint
CREATE INDEX `idx_songs_name` ON `songs` (`name`);--> statement-breakpoint
CREATE INDEX `idx_songs_artist` ON `songs` (`artist`);--> statement-breakpoint
CREATE INDEX `idx_songs_album` ON `songs` (`album`);--> statement-breakpoint
CREATE INDEX `idx_songs_genre` ON `songs` (`genre`);--> statement-breakpoint
CREATE INDEX `idx_songs_bpm` ON `songs` (`bpm`);--> statement-breakpoint
CREATE INDEX `idx_songs_key` ON `songs` (`key`);--> statement-breakpoint
CREATE INDEX `idx_songs_created_at` ON `songs` (`created_at`);