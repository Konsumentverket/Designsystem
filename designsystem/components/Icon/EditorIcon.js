/** @jsx jsx */
import { jsx } from '@emotion/core'

import AppsAndGames from '../../icons/EditorIcons/AppsAndGames'
import Auction from '../../icons/EditorIcons/Auction'
import BeautyEngagement from '../../icons/EditorIcons/BeautyEngagement'
import BrokerServices from '../../icons/EditorIcons/BrokerServices'
import Cars from '../../icons/EditorIcons/Cars'
import Clothes from '../../icons/EditorIcons/Clothes'
import Complaint from '../../icons/EditorIcons/Complaint'
import ComputerTvGameConsole from '../../icons/EditorIcons/ComputerTvGameConsole'
import ConcertAndEvent from '../../icons/EditorIcons/ConcertAndEvent'
import ConsumerRights from '../../icons/EditorIcons/ConsumerRights'
import ContractWorkHouses from '../../icons/EditorIcons/ContractWorkHouses'
import Craftsman from '../../icons/EditorIcons/Craftsman'
import DistanceContractLaw from '../../icons/EditorIcons/DistanceContractLaw'
import EducationAndCourses from '../../icons/EditorIcons/EducationAndCourses'
import ElectricityHeatingContract from '../../icons/EditorIcons/ElectricityHeatingContract'
import FurnituresAndDecoration from '../../icons/EditorIcons/FurnituresAndDecoration'
import GymAndWorkoutService from '../../icons/EditorIcons/GymAndWorkoutService'
import Hairdresser from '../../icons/EditorIcons/Hairdresser'
import Insurance from '../../icons/EditorIcons/Insurance'
import InternetFiberBroadband from '../../icons/EditorIcons/InternetFiberBroadband'
import LoanSaveInvest from '../../icons/EditorIcons/LoanSaveInvest'
import LotteryAndGames from '../../icons/EditorIcons/LotteryAndGames'
import MobilePhone from '../../icons/EditorIcons/MobilePhone'
import MoveAndCleaningService from '../../icons/EditorIcons/MoveAndCleaningService'
import NotDefinedPicture from '../../icons/EditorIcons/NotDefinedPicture'
import Pets from '../../icons/EditorIcons/Pets'
import PurchaseFromPrivate from '../../icons/EditorIcons/PurchaseFromPrivate'
import Receipt from '../../icons/EditorIcons/Receipt'
import SalesLaw from '../../icons/EditorIcons/SalesLaw'
import Telemarketing from '../../icons/EditorIcons/Telemarketing'
import Travel from '../../icons/EditorIcons/Travel'
import WhiteGoods from '../../icons/EditorIcons/WhiteGoods'
import Withdrawal from '../../icons/EditorIcons/Withdrawal'
import Pen from '../../icons/EditorIcons/Pen'
import Map from '../../icons/EditorIcons/Map'
import ChatWithUs from '../../icons/EditorIcons/ChatWithUs'
import CallUs from '../../icons/EditorIcons/CallUs'


const editorIconDefinitions = {
    AppsAndGames,
    Auction,
    BeautyEngagement,
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
    CallUs
}

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
    const Element = editorIconDefinitions[icon];

    if (Element === undefined) {
        console.log(`Could not find icon in storybook tried to load: ${icon}`)
        return null
    }

    return <Element title={title} className={className} style={style} role="img" aria-label={title || ""} alt="" {...otherAttr} />
}

export { EditorIcon, editorIconDefinitions };