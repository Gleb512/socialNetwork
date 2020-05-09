export const updateObjectIArray = (items, itemId, objectPropName, newObjProps) => {
    return items.map(u => {
        if(u[objectPropName] === itemId){
            return {...u, ...newObjProps}
        }
        return u;
    })
}