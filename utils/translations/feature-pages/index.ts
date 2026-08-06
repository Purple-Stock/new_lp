/** Assembles featurePages per locale. */
import {
  inventoryControlPt,
  inventoryControlEn,
  inventoryControlFr,
} from "./inventory-control";
import { barcodingPt, barcodingEn, barcodingFr } from "./barcoding";
import {
  purchaseSalesPt,
  purchaseSalesEn,
  purchaseSalesFr,
} from "./purchase-sales";
import {
  analyticsReportingPt,
  analyticsReportingEn,
  analyticsReportingFr,
} from "./analytics-reporting";
import {
  warehouseControlPt,
  warehouseControlEn,
  warehouseControlFr,
} from "./warehouse-control";
import {
  qrCodeManagementPt,
  qrCodeManagementEn,
  qrCodeManagementFr,
} from "./qr-code-management";
import {
  clothingManufacturingPt,
  clothingManufacturingEn,
  clothingManufacturingFr,
} from "./clothing-manufacturing";
import {
  equipmentManagementPt,
  equipmentManagementEn,
  equipmentManagementFr,
} from "./equipment-management";
import {
  factoryManagementPt,
  factoryManagementEn,
  factoryManagementFr,
} from "./factory-management";
import {
  inventoryAppPt,
  inventoryAppEn,
  inventoryAppFr,
} from "./inventory-app";

export const featurePagesPt = {
  inventoryControl: inventoryControlPt,
  barcoding: barcodingPt,
  purchaseSales: purchaseSalesPt,
  analyticsReporting: analyticsReportingPt,
  warehouseControl: warehouseControlPt,
  qrCodeManagement: qrCodeManagementPt,
  clothingManufacturing: clothingManufacturingPt,
  equipmentManagement: equipmentManagementPt,
  factoryManagement: factoryManagementPt,
  inventoryApp: inventoryAppPt,
} as const;

export const featurePagesEn = {
  inventoryControl: inventoryControlEn,
  barcoding: barcodingEn,
  purchaseSales: purchaseSalesEn,
  analyticsReporting: analyticsReportingEn,
  warehouseControl: warehouseControlEn,
  qrCodeManagement: qrCodeManagementEn,
  clothingManufacturing: clothingManufacturingEn,
  equipmentManagement: equipmentManagementEn,
  factoryManagement: factoryManagementEn,
  inventoryApp: inventoryAppEn,
} as const;

export const featurePagesFr = {
  inventoryControl: inventoryControlFr,
  barcoding: barcodingFr,
  purchaseSales: purchaseSalesFr,
  analyticsReporting: analyticsReportingFr,
  warehouseControl: warehouseControlFr,
  qrCodeManagement: qrCodeManagementFr,
  clothingManufacturing: clothingManufacturingFr,
  equipmentManagement: equipmentManagementFr,
  factoryManagement: factoryManagementFr,
  inventoryApp: inventoryAppFr,
} as const;
