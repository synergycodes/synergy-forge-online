-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "countryId" INTEGER NOT NULL,
    "gameType" TEXT NOT NULL,
    "gameCount" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "silver" INTEGER NOT NULL,
    "bronze" INTEGER NOT NULL,
    FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
