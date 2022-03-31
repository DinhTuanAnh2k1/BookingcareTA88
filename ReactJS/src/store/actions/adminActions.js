import actionTypes from "./actionTypes";
import {
    getAllCodeServices,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService
} from '../../services/userService';
import { toast } from "react-toastify";
export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeServices("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFaided());
            }
        } catch (e) {
            dispatch(fetchGenderFaided());
            console.log('fetchGenderStart error', e);
        }
    }
}

// start -> doing -> end

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIlDED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIlDED
})

export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeServices("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFaided());
            }
        } catch (e) {
            dispatch(fetchPositionFaided());
            console.log('fetchPositionFaided error', e);
        }
    }
}

export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeServices("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFaided());
            }
        } catch (e) {
            dispatch(fetchRoleFaided());
            console.log('fetchRoleFaided error', e);
        }
    }
}

export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('TA88 check create user redux', res)
            if (res && res.errCode === 0) {
                toast.success("Create a new user successfully");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const fetchAllUsersStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch a new user error");
                dispatch(fetchAllUsersFailded());
            }
        } catch (e) {
            toast.error("Fetch a new user error");
            dispatch(fetchAllUsersFailded());
            console.log('fetchAllUsersFailded error', e);
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailded = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED,
})

export const deleteAUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            console.log('TA88 check create user redux', res)
            if (res && res.errCode === 0) {
                toast.success("Delete a new user successfully");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete a new user error");
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error("Delete a new user error");
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
})

export const editAUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            console.log('TA88 check update user redux', res)
            if (res && res.errCode === 0) {
                toast.success("Update a new user successfully");
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update a new user error");
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Update a new user error");
            dispatch(editUserFailed());
            console.log('UpdateUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED,
})