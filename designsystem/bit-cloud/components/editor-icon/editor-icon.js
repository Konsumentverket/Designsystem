/** @jsx jsx */
import { jsx } from "@emotion/core";

import { AppsAndGames } from "@designsystem-scope/utils/Icons/EditorIcons/AppsAndGames/AppsAndGames";
import { Auction } from "@designsystem-scope/utils/Icons/EditorIcons/Auction/Auction";
import { BeautyEngagement } from "@designsystem-scope/utils/Icons/EditorIcons/BeautyEngagement/BeautyEngagement";
import { Bullhorn } from "@designsystem-scope/utils/Icons/EditorIcons/Bullhorn/Bullhorn";
import { Leaf } from "@designsystem-scope/utils/Icons/EditorIcons/Leaf/Leaf";
import { Hardhat } from "@designsystem-scope/utils/Icons/EditorIcons/Hardhat/Hardhat";
import { BrokerServices } from "@designsystem-scope/utils/Icons/EditorIcons/BrokerServices/BrokerServices";
import { Cars } from "@designsystem-scope/utils/Icons/EditorIcons/Cars/Cars";
import { Clothes } from "@designsystem-scope/utils/Icons/EditorIcons/Clothes/Clothes";
import { Complaint } from "@designsystem-scope/utils/Icons/EditorIcons/Complaint/Complaint";
import { ComputerTvGameConsole } from "@designsystem-scope/utils/Icons/EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole";
import { ConcertAndEvent } from "@designsystem-scope/utils/Icons/EditorIcons/ConcertAndEvent/ConcertAndEvent";
import { ConsumerRights } from "@designsystem-scope/utils/Icons/EditorIcons/ConsumerRights/ConsumerRights";
import { ContractWorkHouses } from "@designsystem-scope/utils/Icons/EditorIcons/ContractWorkHouses/ContractWorkHouses";
import { Craftsman } from "@designsystem-scope/utils/Icons/EditorIcons/Craftsman/Craftsman";
import { DistanceContractLaw } from "@designsystem-scope/utils/Icons/EditorIcons/DistanceContractLaw/DistanceContractLaw";
import { EducationAndCourses } from "@designsystem-scope/utils/Icons/EditorIcons/EducationAndCourses/EducationAndCourses";
import { ElectricityHeatingContract } from "@designsystem-scope/utils/Icons/EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract";
import { FurnituresAndDecoration } from "@designsystem-scope/utils/Icons/EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration";
import { GymAndWorkoutService } from "@designsystem-scope/utils/Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService";
import { Hairdresser } from "@designsystem-scope/utils/Icons/EditorIcons/Hairdresser/Hairdresser";
import { Insurance } from "@designsystem-scope/utils/Icons/EditorIcons/Insurance/Insurance";
import { InternetFiberBroadband } from "@designsystem-scope/utils/Icons/EditorIcons/InternetFiberBroadband/InternetFiberBroadband";
import { LoanSaveInvest } from "@designsystem-scope/utils/Icons/EditorIcons/LoanSaveInvest/LoanSaveInvest";
import { LotteryAndGames } from "@designsystem-scope/utils/Icons/EditorIcons/LotteryAndGames/LotteryAndGames";
import { MobilePhone } from "@designsystem-scope/utils/Icons/EditorIcons/MobilePhone/MobilePhone";
import { MoveAndCleaningService } from "@designsystem-scope/utils/Icons/EditorIcons/MoveAndCleaningService/MoveAndCleaningService";
import { NotDefinedPicture } from "@designsystem-scope/utils/Icons/EditorIcons/NotDefinedPicture/NotDefinedPicture";
import { Pets } from "@designsystem-scope/utils/Icons/EditorIcons/Pets/Pets";
import { PurchaseFromPrivate } from "@designsystem-scope/utils/Icons/EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate";
import { Receipt } from "@designsystem-scope/utils/Icons/EditorIcons/Receipt/Receipt";
import { SalesLaw } from "@designsystem-scope/utils/Icons/EditorIcons/SalesLaw/SalesLaw";
import { Telemarketing } from "@designsystem-scope/utils/Icons/EditorIcons/Telemarketing/Telemarketing";
import { Travel } from "@designsystem-scope/utils/Icons/EditorIcons/Travel/Travel";
import { WhiteGoods } from "@designsystem-scope/utils/Icons/EditorIcons/WhiteGoods/WhiteGoods";
import { Withdrawal } from "@designsystem-scope/utils/Icons/EditorIcons/Withdrawal/Withdrawal";
import { Pen } from "@designsystem-scope/utils/Icons/EditorIcons/Pen/Pen";
import { Map } from "@designsystem-scope/utils/Icons/EditorIcons/Map/Map";
import { ChatWithUs } from "@designsystem-scope/utils/Icons/EditorIcons/ChatWithUs/ChatWithUs";
import { CallUs } from "@designsystem-scope/utils/Icons/EditorIcons/CallUs/CallUs";
import { Mic } from "@designsystem-scope/utils/Icons/EditorIcons/Mic/Mic";
import { DatingServices } from "@designsystem-scope/utils/Icons/EditorIcons/DatingServices/DatingServices";
import { UserInjured } from "@designsystem-scope/utils/Icons/EditorIcons/UserInjured/UserInjured";
import { BabyCarriage } from "@designsystem-scope/utils/Icons/EditorIcons/BabyCarriage/BabyCarriage";
import { Ellipsis } from "@designsystem-scope/utils/Icons/EditorIcons/Ellipsis/Ellipsis";
import { HandHeart } from "@designsystem-scope/utils/Icons/EditorIcons/HandHeart/HandHeart";
import { Snowboarding } from "@designsystem-scope/utils/Icons/EditorIcons/Snowboarding/Snowboarding";

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
