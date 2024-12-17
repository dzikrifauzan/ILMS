import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useRegister, useUser } from '@/stores/auth';
import { registerInputSchema } from '@/stores/auth/api';
import { AuthResponse } from '@/types/api';

export type RegisterFormProps = {
  onSuccess: (response: AuthResponse) => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [searchParams] = useSearchParams();
  const register = useRegister(onSuccess);
  const [user] = useUser();
  const redirectTo = searchParams.get('redirectTo');
  return (
    <div>
      <Form
        onSubmit={(values) => {
          register(values);
        }}
        schema={registerInputSchema}
        options={{
          shouldUnregister: true,
        }}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="First Name"
              placeholder="Steven"
              error={formState.errors['firstName']}
              registration={register('firstName')}
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Aditya"
              error={formState.errors['lastName']}
              registration={register('lastName')}
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="steven@toyota.co.id"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <Input
              type="password"
              label="Password"
              placeholder="password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button
                isLoading={user.status === 'loading'}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-center">
        <div className="text-sm">
          Already have an account?
          <Link
            to={paths.auth.login.getHref(redirectTo)}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Login here!
          </Link>
        </div>
      </div>
    </div>
  );
};
