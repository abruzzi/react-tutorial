CREATE TABLE "comments" (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
	"author" varchar(255), 
	"text" text, 
	"created_at" datetime, 
	"updated_at" datetime
);