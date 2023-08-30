-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "exchangeId" INTEGER;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_fk1" FOREIGN KEY ("exchangeId") REFERENCES "exchanges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
