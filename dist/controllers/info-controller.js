import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../config/asyncHandler.js";
export const infoController = asyncHandler(async (req, res, next) => {
    return res.status(StatusCodes.OK).json({
        sucess: true,
        message: 'Server is running and live',
        data: "Live",
        error: {}
    });
});
//# sourceMappingURL=info-controller.js.map