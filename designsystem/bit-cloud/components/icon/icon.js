/** @jsx jsx */
import { jsx } from "@emotion/core";

import Adapt from "../utils/Icons/SystemIcons/Adapt/Adapt"
import Close from "../utils/Icons/SystemIcons/Close/Close";
import Easytoread from "../utils/Icons/SystemIcons/Easytoread/Easytoread";
import Search from "../utils/Icons/SystemIcons/Search/Search";
import Signlanguage from "../utils/Icons/SystemIcons/Signlanguage/Signlanguage";
import Volume from "../utils/Icons/SystemIcons/Volume/Volume";
import Otherlang from "../utils/Icons/SystemIcons/Otherlang/Otherlang";
import Ecc from "../utils/Icons/SystemIcons/Ecc/Ecc";
import Arrow from "../utils/Icons/SystemIcons/Arrow/Arrow";
import Burger from "../utils/Icons/SystemIcons/Burger/Burger";
import External from "../utils/Icons/SystemIcons/External/External";
import Exclamationmark from "../utils/Icons/SystemIcons/Exclamationmark/Exclamationmark";
import Check from "../utils/Icons/SystemIcons/Check/Check";
import Oval from "../utils/Icons/SystemIcons/Oval/Oval";
import LinkArrow from "../utils/Icons/SystemIcons/LinkArrow/LinkArrow";
import Filter from "../utils/Icons/SystemIcons/Filter/Filter";
import List from "../utils/Icons/SystemIcons/List/List";
import Picturelist from "../utils/Icons/SystemIcons/Picturelist/Picturelist";
import Clear from "../utils/Icons/SystemIcons/Clear/Clear";
import Camera from "../utils/Icons/SystemIcons/Camera/Camera";
import Play from "../utils/Icons/SystemIcons/Play/Play";
import FileExcel from "../utils/Icons/SystemIcons/FileExcel/FileExcel";
import FilePdf from "../utils/Icons/SystemIcons/FilePdf/FilePdf";
import FilePowerpoint from "../utils/Icons/SystemIcons/FilePowerpoint/FilePowerpoint";
import FileWord from "../utils/Icons/SystemIcons/FileWord/FileWord";
import File from "../utils/Icons/SystemIcons/File/File";
import Warn from "../utils/Icons/SystemIcons/Warn/Warn";
import Question from "../utils/Icons/SystemIcons/Question/Question";
import AirTime from "../utils/Icons/SystemIcons/AirTime/AirTime";
import AtBranch from "../utils/Icons/SystemIcons/AtBranch/AtBranch";
import BankAccount from "../utils/Icons/SystemIcons/BankAccount/BankAccount";
import CallCenter from "../utils/Icons/SystemIcons/CallCenter/CallCenter";
import HomeDelivery from "../utils/Icons/SystemIcons/HomeDelivery/HomeDelivery";
import Online from "../utils/Icons/SystemIcons/Online/Online";
import Send from "../utils/Icons/SystemIcons/Send/Send";

const iconDefinitions = {
  Adapt,
  Close,
  Easytoread,
  External,
  Search,
  Signlanguage,
  Volume,
  Otherlang,
  Arrow,
  Ecc,
  Burger,
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
  Send
};

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = iconDefinitions[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      focusable="false"
      title={title || icon || ""}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

export { Icon, iconDefinitions };
