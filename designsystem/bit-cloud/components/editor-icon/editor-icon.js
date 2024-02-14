/** @jsx jsx */
import { jsx } from "@emotion/core";

import AppsAndGames from "../utils/Icons/EditorIcons/AppsAndGames/AppsAndGames";
import Auction from "../utils/Icons/EditorIcons/Auction/Auction";
import BeautyEngagement from "../utils/Icons/EditorIcons/BeautyEngagement/BeautyEngagement";
import Bullhorn from "../utils/Icons/EditorIcons/Bullhorn/Bullhorn";
import Leaf from "../utils/Icons/EditorIcons/Leaf/Leaf";
import Hardhat from "../utils/Icons/EditorIcons/Hardhat/Hardhat";
import BrokerServices from "../utils/Icons/EditorIcons/BrokerServices/BrokerServices";
import Cars from "../utils/Icons/EditorIcons/Cars/Cars";
import Clothes from "../utils/Icons/EditorIcons/Clothes/Clothes";
import Complaint from "../utils/Icons/EditorIcons/Complaint/Complaint";
import ComputerTvGameConsole from "../utils/Icons/EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole";
import ConcertAndEvent from "../utils/Icons/EditorIcons/ConcertAndEvent/ConcertAndEvent";
import ConsumerRights from "../utils/Icons/EditorIcons/ConsumerRights/ConsumerRights";
import ContractWorkHouses from "../utils/Icons/EditorIcons/ContractWorkHouses/ContractWorkHouses";
import Craftsman from "../utils/Icons/EditorIcons/Craftsman/Craftsman";
import DistanceContractLaw from "../utils/Icons/EditorIcons/DistanceContractLaw/DistanceContractLaw";
import EducationAndCourses from "../utils/Icons/EditorIcons/EducationAndCourses/EducationAndCourses";
import ElectricityHeatingContract from "../utils/Icons/EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract";
import FurnituresAndDecoration from "../utils/Icons/EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration";
import GymAndWorkoutService from "../utils/Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService";
import Hairdresser from "../utils/Icons/EditorIcons/Hairdresser/Hairdresser";
import Insurance from "../utils/Icons/EditorIcons/Insurance/Insurance";
import InternetFiberBroadband from "../utils/Icons/EditorIcons/InternetFiberBroadband/InternetFiberBroadband";
import LoanSaveInvest from "../utils/Icons/EditorIcons/LoanSaveInvest/LoanSaveInvest";
import LotteryAndGames from "../utils/Icons/EditorIcons/LotteryAndGames/LotteryAndGames";
import MobilePhone from "../utils/Icons/EditorIcons/MobilePhone/MobilePhone";
import MoveAndCleaningService from "../utils/Icons/EditorIcons/MoveAndCleaningService/MoveAndCleaningService";
import NotDefinedPicture from "../utils/Icons/EditorIcons/NotDefinedPicture/NotDefinedPicture";
import Pets from "../utils/Icons/EditorIcons/Pets/Pets";
import PurchaseFromPrivate from "../utils/Icons/EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate";
import Receipt from "../utils/Icons/EditorIcons/Receipt/Receipt";
import SalesLaw from "../utils/Icons/EditorIcons/SalesLaw/SalesLaw";
import Telemarketing from "../utils/Icons/EditorIcons/Telemarketing/Telemarketing";
import Travel from "../utils/Icons/EditorIcons/Travel/Travel";
import WhiteGoods from "../utils/Icons/EditorIcons/WhiteGoods/WhiteGoods";
import Withdrawal from "../utils/Icons/EditorIcons/Withdrawal/Withdrawal";
import Pen from "../utils/Icons/EditorIcons/Pen/Pen";
import Map from "../utils/Icons/EditorIcons/Map/Map";
import ChatWithUs from "../utils/Icons/EditorIcons/ChatWithUs/ChatWithUs";
import CallUs from "../utils/Icons/EditorIcons/CallUs/CallUs";
import Mic from "../utils/Icons/EditorIcons/Mic/Mic";
import DatingServices from "../utils/Icons/EditorIcons/DatingServices/DatingServices";
import UserInjured from "../utils/Icons/EditorIcons/UserInjured/UserInjured";
import BabyCarriage from "../utils/Icons/EditorIcons/BabyCarriage/BabyCarriage";
import Ellipsis from "../utils/Icons/EditorIcons/Ellipsis/Ellipsis";
import HandHeart from "../utils/Icons/EditorIcons/HandHeart/HandHeart";
import Snowboarding from "../utils/Icons/EditorIcons/Snowboarding/Snowboarding";

const editorIconDefinitions = {
  AppsAndGames,
  Auction,
  BeautyEngagement,
  Bullhorn,
  Leaf,
  Hardhat,
  BrokerServices,
  Cars,
  Clothes,
  Complaint,
  ComputerTvGameConsole,
  ConcertAndEvent,
  ConsumerRights,
  ContractWorkHouses,
  Craftsman,
  DistanceContractLaw,
  EducationAndCourses,
  ElectricityHeatingContract,
  FurnituresAndDecoration,
  GymAndWorkoutService,
  Hairdresser,
  Insurance,
  InternetFiberBroadband,
  LoanSaveInvest,
  LotteryAndGames,
  MobilePhone,
  MoveAndCleaningService,
  NotDefinedPicture,
  Pets,
  PurchaseFromPrivate,
  Receipt,
  SalesLaw,
  Telemarketing,
  Travel,
  WhiteGoods,
  Withdrawal,
  Pen,
  Map,
  ChatWithUs,
  CallUs,
  Mic,
  DatingServices,
  UserInjured,
  BabyCarriage,
  Ellipsis,
  HandHeart,
  Snowboarding
};

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = editorIconDefinitions[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      title={title}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

export { EditorIcon, editorIconDefinitions };
