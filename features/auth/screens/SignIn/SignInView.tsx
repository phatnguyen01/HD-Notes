import React from "react";
import {
  Box,
  Button,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
  Image,
  Text,
  MailIcon,
  LockIcon,
  ButtonText,
  Pressable,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
} from "@gluestack-ui/themed";
import LogoView from "@/components/Elements/Logo";
import IconGoogle from "@/assets/images/google.png";
import IconFacebook from "@/assets/images/facebook.png";
import { Control, Controller, FieldErrors } from "react-hook-form";

export interface LoginForm {
  email: string;
  password: string;
}

interface SignInViewProps {
  control: Control<LoginForm>;
  errors: FieldErrors<LoginForm>;
  isSubmitting?: boolean;
  isDisabled?: boolean;

  showPassword: boolean;
  hadleSetShowPassword: () => void;
  onLogin: () => void;
  onSignInWithGoogle: () => void;
  onSignInWithFacebook: () => void;
  handleGoToSignUp: () => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  control,
  errors,
  isSubmitting = false,
  isDisabled = false,

  showPassword,
  hadleSetShowPassword,
  onLogin,
  onSignInWithGoogle,
  onSignInWithFacebook,
  handleGoToSignUp,
}) => (
  <Box alignItems="center" pt="$20" paddingHorizontal="$4">
    <LogoView />
    <Text
      color="$secondary_yellow4"
      fontSize="$md"
      fontWeight="bold"
      lineHeight="$xs"
      pt="$3"
      pb="$1"
    >
      Login to continue
    </Text>
    <Box w="$full">
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl pt="$10" w="$full">
            <FormControlLabel mb="$2">
              <FormControlLabelText
                fontWeight="bold"
                color="$secondary_yellow4"
              >
                Email
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
                <InputIcon size="lg" as={MailIcon} color="$borderDark500" />
              </InputSlot>
              <InputField
                onBlur={onBlur}
                type="text"
                value={value}
                isDisabled={isSubmitting}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
              />
            </Input>
            <FormControlError accessibilityRole="alert">
              <FormControlErrorIcon
                as={AlertCircleIcon}
                size="2xs"
                color="$error700"
              />
              <FormControlErrorText fontSize="$xs">
                {errors.email?.message ?? ""}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl pt="$5" w="$full" isInvalid={!!errors.password?.message}>
            <FormControlLabel mb="$2">
              <FormControlLabelText
                fontWeight="bold"
                color="$secondary_yellow4"
              >
                Password
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputSlot pl="$2" pr="$1" onPress={hadleSetShowPassword}>
                <InputIcon size="lg" as={LockIcon} color="$borderDark500" />
              </InputSlot>
              <InputField
                type={showPassword ? "text" : "password"}
                value={value}
                isDisabled={isSubmitting}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
              />
              <InputSlot pr="$3" onPress={hadleSetShowPassword}>
                <InputIcon
                  size="lg"
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$borderDark500"
                />
              </InputSlot>
            </Input>
            {/* <FormControlError accessibilityRole="alert">
              <FormControlErrorIcon
                as={AlertCircleIcon}
                size="2xs"
                color="$error700"
              />
              <FormControlErrorText fontSize="$xs">
                {errors.password?.message ?? ""}
              </FormControlErrorText>
            </FormControlError> */}
          </FormControl>
        )}
      />
    </Box>
    <Button
      onPress={onLogin}
      mt="$8"
      w="$full"
      bgColor="$secondary_yellow3"
      isDisabled={isDisabled}
    >
      <ButtonText color="$white" fontWeight="bold">
        LOG IN
      </ButtonText>
    </Button>
    <Box pt="$10" flexDirection="row" alignItems="center">
      <Box h="$0.5" w="$32" bgColor="$black" />
      <Text
        color="$black"
        fontSize="$sm"
        fontWeight="$semibold"
        pr="$2"
        pl="$2"
      >
        OR
      </Text>
      <Box h="$0.5" w="$32" bgColor="$black" />
    </Box>

    <Pressable
      onPress={onSignInWithGoogle}
      w="$full"
      mt="$10"
      p="$2"
      flexDirection="row"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderDark600"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image alt="logo1" size="2xs" borderRadius={10} source={IconGoogle} />
      <Text color="$black" fontSize="$sm" fontWeight="$semibold" pl="$2">
        Sign in with Google
      </Text>
      <Box />
    </Pressable>
    <Pressable
      onPress={onSignInWithFacebook}
      w="$full"
      mt="$2"
      p="$2"
      flexDirection="row"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderDark600"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image alt="logo1" size="2xs" borderRadius={10} source={IconFacebook} />
      <Text color="$black" fontSize="$sm" fontWeight="$semibold" pl="$2">
        Sign in with Facebook
      </Text>
      <Box />
    </Pressable>

    <Box pt="$12" flexDirection="row">
      <Text color="$black" fontSize="$sm" fontWeight="$semibold">
        Don't have an account?
      </Text>
      <Pressable onPress={handleGoToSignUp} pl="$1">
        <Text color="$secondary_yellow4" fontSize="$sm" fontWeight="$semibold">
          Sign up now
        </Text>
      </Pressable>
    </Box>
  </Box>
);
export default SignInView;
