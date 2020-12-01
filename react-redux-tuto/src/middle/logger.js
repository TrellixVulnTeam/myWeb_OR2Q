const logger = (store) => (next) => (action) => {
  console.group(action && action.type); //액션 타입으로 log 그룹화
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어
  console.log('다음상태', store.getState());
  console.groupEnd();
};

export default logger;
