const initialState = {};

const dataProducers = (state = initialState, action: any): any =>
{
	switch (action.type)
	{
		case 'SET_ROOM_STATE':
		{
			const roomState = action.payload.state;

			if (roomState === 'close')
				return {};
			else
				return state;
		}

		case 'ADD_DATA_PRODUCER':
		{
			const { dataProducer } = action.payload;

			return { ...state, [dataProducer.id]: dataProducer };
		}

		case 'REMOVE_DATA_PRODUCER':
		{
			const { dataProducerId } = action.payload;
			const newState = { ...state };

			// @ts-ignore
			delete newState[dataProducerId];

			return newState;
		}

		default:
		{
			return state;
		}
	}
};

export default dataProducers;
