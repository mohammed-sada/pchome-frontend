import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const categories = [
  { name: "all", value: "all" },
  {
    name: "computer accessories",
    value: "computerAccessories",
    image:
      "https://in-media.apjonlinecdn.com/wysiwyg/buying-accessories/images/omen-acc.png",
    subCat: [
      { name: "bags" },
      { name: "keyboards" },
      { name: "mice" },
      { name: "mouse pads" },
      { name: "headphone" },
    ],
  },
  {
    name: "computer components",
    value: "computerComponents",
    image:
      "https://www.bapcs.co.uk/wp-content/uploads/2019/01/computer-components.png",
    subCat: [
      {
        name: "motherboards",
      },
      {
        name: "graphic display cards",
        value: "graphicDisplayCards",
      },
      {
        name: "CPU processors",
        value: "CPUProcessors",
      },
      {
        name: "CPU coolers",
        value: "CPUCoolers",
      },
      {
        name: "case coolers",
        value: "caseCoolers",
      },
      {
        name: "computer cases",
        value: "computerCases",
      },
      {
        name: "power supplies",
        value: "powerSupplies",
      },
    ],
  },
  {
    name: "desktop & workstation",
    value: "desktop&workstation",
    image:
      "https://3.imimg.com/data3/NA/AJ/MY-4145714/desktop-computer-500x500.jpg",
    subCat: [
      {
        name: "brand desktop",
        value: "brandDesktop",
      },
      {
        name: "workstations",
      },
    ],
  },
  {
    name: "gear",
    value: "gear",
    image:
      "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/x/f/xfit_black-white01.jpg",
  },
  {
    name: "laptop",
    value: "laptop",
    image:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06348568.png",
    subCat: [
      {
        name: "professional",
      },
      {
        name: "macBook",
      },
      {
        name: "noteBook",
      },
    ],
  },
  {
    name: "memory & storage",
    value: "memory&storage",
    image:
      "https://www.techadvisor.com/cmsdata/features/3605133/How_to_Harddrive_case_1_thumb800.jpg",
    subCat: [
      {
        name: "external hard drives",
        value: "externalHardDrives",
      },
      {
        name: "HDD & SSD",
        value: "HDD&SSD",
      },
      {
        name: "RAM",
      },
      {
        name: "storage",
      },
    ],
  },
  {
    name: "monitors",
    value: "monitors",
    image:
      "https://www.kibotek.com/wp-content/uploads/2021/01/kiboTEK_xiaomi_monitor_c1_001.jpg",
  },
  {
    name: "power banks & UPS",
    value: "powerBanks&UPS",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61p9QTx-jgL._AC_SX522_.jpg",
    subCat: [
      {
        name: "power banks",
        value: "powerBanks",
      },
      {
        name: "UPS",
      },
    ],
  },
  {
    name: "printers & scanners",
    value: "printers&scanners",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1594317518-hp-officejet-1594317461.jpg",
    subCat: [
      {
        name: "laser printers",
        value: "laserPrinters",
      },
      {
        name: "scanners",
      },
    ],
  },
  {
    name: "software",
    value: "software",
    image:
      "https://mscitysideinvestments.com/wp-content/uploads/2020/10/Kaspersky-Internet-Security-2019.png",
    subCat: [
      {
        name: "kaspersky",
      },
      {
        name: "microsoft",
      },
    ],
  },
];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <RiMoneyDollarCircleLine />,
    title: "money back guarantee",
  },
  {
    id: 2,
    icon: <MdLocalShipping />,
    title: "free shipping",
  },
  {
    id: 3,
    icon: <BiSupport />,
    title: "online support 24/7",
  },
];

export const breakPoints1 = [{ width: 1, itemsToShow: 1 }];
export const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const STOCK = 10;

export const products_url = "https://pc-home.herokuapp.com/products";

export const single_product_url = `https://pc-home.herokuapp.com/products?id=`;
