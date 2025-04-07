-- CreateEnum
CREATE TYPE "Modality" AS ENUM ('web', 'design', 'marketing', 'robotics');

-- CreateEnum
CREATE TYPE "Year" AS ENUM ('first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth');

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "modality" "Modality" NOT NULL,
    "year" "Year" NOT NULL,
    "experience" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "skills" TEXT[],
    "availability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submission_email_key" ON "Submission"("email");
