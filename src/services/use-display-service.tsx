import { useContext } from "react";
import { DisplayServiceContext } from "./display-service.provider";

export const useDisplayService = () => useContext(DisplayServiceContext);
