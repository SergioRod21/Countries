const resolveRoutes = (route) => {
	if (route) { 
		let isItHome = route === "/" ? route : "/name/:name";
		return isItHome;
	}
	return `/${route}`;
};

export default resolveRoutes;
