import { Text as DefaultText } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

// example of styled component with Tailwind
// intellisense should auto-import this one instead of the default if you export it
function Text(props: DefaultText['props']) {
  const { style: propTwStyle, ...otherProps } = props;

  // example of default tw styles
  const defaultTwStyle = useTailwind()('text-pink-600');

  // prop tw styles overwrite default tw styles
  return <DefaultText style={[defaultTwStyle, propTwStyle]} {...otherProps} />;
}
