import 'date-fns';
import { colors, newColors } from './colors';
import { GlobalStyles as globalStyles } from './globalstyles';
import { spacing } from './spacing';
import { DateFormat } from './dateformat.js';

// System icons
import { Adapt } from "./Icons/SystemIcons/Adapt/Adapt.js"
import { Close } from "./Icons/SystemIcons/Close/Close.js";
import { Easytoread } from "./Icons/SystemIcons/Easytoread/Easytoread.js";
import { Search } from "./Icons/SystemIcons/Search/Search.js";
import { Signlanguage } from "./Icons/SystemIcons/Signlanguage/Signlanguage.js";
import { Volume } from "./Icons/SystemIcons/Volume/Volume.js";
import { Otherlang } from "./Icons/SystemIcons/Otherlang/Otherlang.js";
import { Ecc } from "./Icons/SystemIcons/Ecc/Ecc.js";
import { Arrow, arrowPath } from './Icons/SystemIcons/Arrow/Arrow.js';
import { Burger } from "./Icons/SystemIcons/Burger/Burger.js";
import { External } from "./Icons/SystemIcons/External/External.js";
import { Exclamationmark } from "./Icons/SystemIcons/Exclamationmark/Exclamationmark.js";
import { Check } from "./Icons/SystemIcons/Check/Check.js";
import { Oval } from "./Icons/SystemIcons/Oval/Oval.js";
import { LinkArrow } from "./Icons/SystemIcons/LinkArrow/LinkArrow.js";
import { Filter } from "./Icons/SystemIcons/Filter/Filter.js";
import { List } from "./Icons/SystemIcons/List/List.js";
import { Picturelist } from "./Icons/SystemIcons/Picturelist/Picturelist.js";
import { Clear } from "./Icons/SystemIcons/Clear/Clear.js";
import { Camera } from "./Icons/SystemIcons/Camera/Camera.js";
import { Play } from "./Icons/SystemIcons/Play/Play.js";
import { FileExcel } from "./Icons/SystemIcons/FileExcel/FileExcel.js";
import { FilePdf } from "./Icons/SystemIcons/FilePdf/FilePdf.js";
import { FilePowerpoint } from "./Icons/SystemIcons/FilePowerpoint/FilePowerpoint.js";
import { FileWord } from "./Icons/SystemIcons/FileWord/FileWord.js";
import { File } from "./Icons/SystemIcons/File/File.js";
import { Warn } from "./Icons/SystemIcons/Warn/Warn.js";
import { Question } from "./Icons/SystemIcons/Question/Question.js";
import { AirTime } from "./Icons/SystemIcons/AirTime/AirTime.js";
import { AtBranch } from "./Icons/SystemIcons/AtBranch/AtBranch.js";
import { BankAccount } from "./Icons/SystemIcons/BankAccount/BankAccount.js";
import { CallCenter } from "./Icons/SystemIcons/CallCenter/CallCenter.js";
import { HomeDelivery } from "./Icons/SystemIcons/HomeDelivery/HomeDelivery.js";
import { Online } from "./Icons/SystemIcons/Online/Online.js";
import { Send } from "./Icons/SystemIcons/Send/Send.js";

// Editor icons
import { AppsAndGames } from "./Icons/EditorIcons/AppsAndGames/AppsAndGames.js";
import { Auction } from "./Icons/EditorIcons/Auction/Auction.js";
import { BeautyEngagement } from "./Icons/EditorIcons/BeautyEngagement/BeautyEngagement.js";
import { Bullhorn } from "./Icons/EditorIcons/Bullhorn/Bullhorn.js";
import { Leaf } from "./Icons/EditorIcons/Leaf/Leaf.js";
import { Hardhat } from "./Icons/EditorIcons/Hardhat/Hardhat.js";
import { BrokerServices } from "./Icons/EditorIcons/BrokerServices/BrokerServices.js";
import { Cars } from "./Icons/EditorIcons/Cars/Cars.js";
import { Clothes } from "./Icons/EditorIcons/Clothes/Clothes.js";
import { Complaint } from "./Icons/EditorIcons/Complaint/Complaint.js";
import { ComputerTvGameConsole } from "./Icons/EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole.js";
import { ConcertAndEvent } from "./Icons/EditorIcons/ConcertAndEvent/ConcertAndEvent.js";
import { ConsumerRights } from "./Icons/EditorIcons/ConsumerRights/ConsumerRights.js";
import { ContractWorkHouses } from "./Icons/EditorIcons/ContractWorkHouses/ContractWorkHouses.js";
import { Craftsman } from "./Icons/EditorIcons/Craftsman/Craftsman.js";
import { DistanceContractLaw } from "./Icons/EditorIcons/DistanceContractLaw/DistanceContractLaw.js";
import { EducationAndCourses } from "./Icons/EditorIcons/EducationAndCourses/EducationAndCourses.js";
import { ElectricityHeatingContract } from "./Icons/EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract.js";
import { FurnituresAndDecoration } from "./Icons/EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration.js";
import { GymAndWorkoutService } from "./Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService.js";
import { Hairdresser } from "./Icons/EditorIcons/Hairdresser/Hairdresser.js";
import { Insurance } from "./Icons/EditorIcons/Insurance/Insurance.js";
import { InternetFiberBroadband } from "./Icons/EditorIcons/InternetFiberBroadband/InternetFiberBroadband.js";
import { LoanSaveInvest } from "./Icons/EditorIcons/LoanSaveInvest/LoanSaveInvest.js";
import { LotteryAndGames } from "./Icons/EditorIcons/LotteryAndGames/LotteryAndGames.js";
import { MobilePhone } from "./Icons/EditorIcons/MobilePhone/MobilePhone.js";
import { MoveAndCleaningService } from "./Icons/EditorIcons/MoveAndCleaningService/MoveAndCleaningService.js";
import { NotDefinedPicture } from "./Icons/EditorIcons/NotDefinedPicture/NotDefinedPicture.js";
import { Pets } from "./Icons/EditorIcons/Pets/Pets.js";
import { PurchaseFromPrivate } from "./Icons/EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate.js";
import { Receipt } from "./Icons/EditorIcons/Receipt/Receipt.js";
import { SalesLaw } from "./Icons/EditorIcons/SalesLaw/SalesLaw.js";
import { Telemarketing } from "./Icons/EditorIcons/Telemarketing/Telemarketing.js";
import { Travel } from "./Icons/EditorIcons/Travel/Travel.js";
import { WhiteGoods } from "./Icons/EditorIcons/WhiteGoods/WhiteGoods.js";
import { Withdrawal } from "./Icons/EditorIcons/Withdrawal/Withdrawal.js";
import { Pen } from "./Icons/EditorIcons/Pen/Pen.js";
import { Map } from "./Icons/EditorIcons/Map/Map.js";
import { ChatWithUs } from "./Icons/EditorIcons/ChatWithUs/ChatWithUs.js";
import { CallUs } from "./Icons/EditorIcons/CallUs/CallUs.js";
import { Mic } from "./Icons/EditorIcons/Mic/Mic.js";
import { DatingServices } from "./Icons/EditorIcons/DatingServices/DatingServices.js";
import { UserInjured } from "./Icons/EditorIcons/UserInjured/UserInjured.js";
import { BabyCarriage } from "./Icons/EditorIcons/BabyCarriage/BabyCarriage.js";
import { Ellipsis } from "./Icons/EditorIcons/Ellipsis/Ellipsis.js";
import { HandHeart } from "./Icons/EditorIcons/HandHeart/HandHeart.js";
import { Snowboarding } from "./Icons/EditorIcons/Snowboarding/Snowboarding.js";

export {

    // Utils

    colors,
    newColors,
    globalStyles,
    spacing,
    DateFormat,

    // System icons

    Adapt,
    Close,
    Easytoread,
    Search,
    Signlanguage,
    Volume,
    Otherlang,
    Ecc,
    Arrow,
    arrowPath,
    Burger,
    External,
    Exclamationmark,
    Check,
    Oval,
    LinkArrow,
    Filter,
    List,
    Picturelist,
    Clear,
    Camera,
    Play,
    FileExcel,
    FilePdf,
    FilePowerpoint,
    FileWord,
    File,
    Warn,
    Question,
    AirTime,
    AtBranch,
    BankAccount,
    CallCenter,
    HomeDelivery,
    Online,
    Send,

    // System icons

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
    Snowboarding,
}
