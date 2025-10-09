
const getInstallationApps = ()=>{
    try{
        const installationAppsData = localStorage.getItem('installedApp');
        return installationAppsData ? JSON.parse(installationAppsData) : []
    }
    catch(err){
        console.log(err);
        return []
    }
}

const installationAppsAddToDB = (app)=>{
    const installationApps = getInstallationApps();
    try{
        
        const updateInstallationList = [...installationApps, app];
        localStorage.setItem('installedApp', JSON.stringify(updateInstallationList))
    }
    catch(err){
        console.log(err)
    }
}

const removeFromInstallationAppsList = (id)=>{
    const installationApps = getInstallationApps();
    try{
     const updateInstallationList = installationApps.filter(p=> p.id !== id);
     localStorage.setItem('installedApp', JSON.stringify(updateInstallationList))
    }
    catch(err){
        console.log(err);
    }

}

export {getInstallationApps, installationAppsAddToDB, removeFromInstallationAppsList}