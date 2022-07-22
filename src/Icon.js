import { Text } from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon({ color, size, icon }) {
  return (
    <Text color={color} size={size}>
      <FontAwesomeIcon icon={icon} />
    </Text>
  );
}
